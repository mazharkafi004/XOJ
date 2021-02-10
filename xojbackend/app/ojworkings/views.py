from django.http import HttpResponse,JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response
import requests
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from ojworkings.uriWorkings import uriLogin, getProblist as getUriProblist, \
                                   uriSubmit
from ojworkings.uvaWorkings import uvaLogin, getProblist as getUvaProblist


class Problist(viewsets.ViewSet):
    """problist viewset"""

    def list(self, request):
        cliente = requests.session()
        problist = getUriProblist(cliente,5)
        return Response(problist)


def problist2(request, oj):
    """lists problems judgewise"""
    cliente = requests.session()
    problist = []
    if oj == "URI":
        problist.extend(getUriProblist(cliente,5))
        problist.extend(getUriProblist(cliente,8))
        problist.extend(getUriProblist(cliente,18))
        problist.extend(getUriProblist(cliente,12))
    elif oj == "UVA":
        problist.extend(getUvaProblist(cliente,3))
        problist.extend(getUvaProblist(cliente,6))
        problist.extend(getUvaProblist(cliente,5))
    elif oj == "CF":
        url = "https://codeforces.com/api/problemset.problems"
    else:
        pass
    res = JsonResponse(problist, safe=False)
    return res

def probshow(request, oj, probid):
    """shows problem details"""
    cliente = requests.session()
    rrs = ""
    if oj == "URI":
        url = "https://www.urionlinejudge.com.br/repository/UOJ_{}_en.html".format(probid)
        rrs = cliente.get(url)
        print(rrs.content)

    res = HttpResponse(rrs.content)
    del res['X-Frame-Options']
    res['X-Frame-Options'] = 'ALL'
    return res


class UriSubmit(viewsets.ViewSet):

    authentication_classes= (TokenAuthentication,)
    def create(self, request):
        cliente = requests.session()
        login = uriLogin(
            cliente,
            request.user.uri_handle,
            request.user.uri_pass
        )
        if login :
            submit = uriSubmit(
                cliente,
                request.data["prob_id"],
                request.data["lang_id"],
                request.data["source_code"]
            )
            if submit :
                return Response(
                    {
                        "success": True
                    }
                )
            else:
                return Response(
                    {
                        "success": False,
                        "msg": "Failed to submit"
                    }
                )
        else :
            return Response(
                {
                    "success": False,
                    "msg": "Failed to login"
                }
            )

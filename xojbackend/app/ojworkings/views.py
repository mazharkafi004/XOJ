from django.http import HttpResponse,JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response
import requests
from ojworkings.uriWorkings import uriLogin, getProblist as getUriProblist
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

from django.urls import path,include
from ojworkings import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('problist',views.Problist, basename='problist')
router.register('URI/submit',views.UriSubmit,basename = "uriSubmit")

urlpatterns = [
    path('',include(router.urls)),
    path('problist2/<slug:oj>/',views.problist2,name='problist2'),
    path('<slug:oj>/<slug:probid>/',views.probshow,name='probshow'),
]

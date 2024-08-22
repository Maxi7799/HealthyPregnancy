from ninja import NinjaAPI
from ..models import Name

api = NinjaAPI()


@api.get("/add")
def add(request, a: int, b: int):
    return {"result": a + b}


@api.get("/name")
def list_tree(request):
    names = Name.objects.all()
    return [
        {"id":name.id, "name": name.name} for name in names
    ]
from ninja import NinjaAPI
from sim.model.model_test import Name

test = NinjaAPI(version="1.0.0")


@test.get("/add")
def add(request, a: int, b: int):
    return {"result": a + b}


@test.get("/name")
def list_tree(request):
    names = Name.objects.all()
    return [
        {"id": name.id, "name": name.name} for name in names
    ]

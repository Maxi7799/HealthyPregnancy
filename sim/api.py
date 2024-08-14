from ninja import NinjaAPI

api = NinjaAPI()


@api.get("/add")
def add(request, a: int, b: int):
    return {"result": a + b}


@api.get("/tree")
def list_tree(request):
    return [
        {"id": 1, "name": "Maple"},
        {"id": 2, "name": "Oak"},
        {"id": 3, "name": "three"},
        {"id": 4, "name": "four"},
        {"id": 5, "name": "five"},
        {"id": 6, "name": "six"},
        {"id": 7, "name": "seven"},
        {"id": 8, "name": "night"}
    ]

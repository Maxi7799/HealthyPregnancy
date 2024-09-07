from ninja import NinjaAPI


food = NinjaAPI(version="4.0.0")


@food.get("/nutrition")
def get_food_nutrition(request):
    return "food nutrition"

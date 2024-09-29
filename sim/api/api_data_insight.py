from ninja import NinjaAPI
from sim.model.model_data_insight import HealthRisk, FirstVisit, BirthMethod, CReason, PostLength

datainsight = NinjaAPI(version="2.0.0")


@datainsight.get("/healthrisk")
def get_health_risk(request):
    health_risks = HealthRisk.objects.all()
    x_axis_gd = []
    y_axis_gd_percent = []
    y_axis_gd_value = []
    x_axis_gh = []
    y_axis_gh_percent = []
    y_axis_gh_value = []
    title = "Healthy Risk"
    x_desc = "year"
    y_desc = "value"
    cate_gd = "Gestational diabetes"
    cate_gh = "Gestational hypertension"

    for health in health_risks:
        if health.risk == "Gestational diabetes":
            x_axis_gd.append(health.year)
            y_axis_gd_value.append(health.value)
            y_axis_gd_percent.append(health.percent)
        elif health.risk == "Gestational hypertension":
            x_axis_gh.append(health.year)
            y_axis_gh_value.append(health.value)
            y_axis_gh_percent.append(health.percent)

    return {
        "chart_title": title,
        "x_desc": x_desc,
        "y_desc": y_desc,
        "category_gd": cate_gd,
        "category_gh": cate_gh,
        "x_axis_gd": x_axis_gd,
        "x_axis_gh": x_axis_gh,
        "y_axis_gd_percent": y_axis_gd_percent,
        "y_axis_gd_value": y_axis_gd_value,
        "y_axis_gh_percent": y_axis_gh_percent,
        "y_axis_gh_value": y_axis_gh_value
    }


@datainsight.get("/firstvisit")
def get_first_visit(request):
    first_visits = FirstVisit.objects.all()

    cate_list = []
    title = "Healthy Risk"

    for first_visit in first_visits:
        cate_list.append({"duration": first_visit.duration,
                         "value": first_visit.value, "percent": first_visit.percent})

    return {
        "chart_title": title,
        "pie_chart": cate_list
    }


@datainsight.get("/birthmethod")
def get_birth_method(request):
    birth_methods = BirthMethod.objects.all()

    cate_list = []
    title = "Birth Method"

    for birth_method in birth_methods:
        cate_list.append({"method": birth_method.method,
                         "value": birth_method.value, "percent": birth_method.percent})

    return {
        "chart_title": title,
        "pie_chart": cate_list
    }


@datainsight.get("/creason")
def get_c_reason(request):
    c_reasons = CReason.objects.all()

    title = "C Reason"
    y_axis = []
    x_axis_value = []
    x_axis_percent = []

    for c_reason in c_reasons:
        y_axis.append(c_reason.reason)
        x_axis_value.append(c_reason.value)
        x_axis_percent.append(c_reason.percent)

    return {
        "chart_title": title,
        "y_axis": y_axis,
        "x_axis_value": x_axis_value,
        "x_axis_percent": x_axis_percent
    }


@datainsight.get("/postlength")
def get_post_length(request):
    post_lengths = PostLength.objects.all()

    title = "Post Length"
    method = ["Non-Instrumental Vaginal Delivery",
              "Forceps Delivery", "Vacuum Extraction Delivery", "Caesarean Section"]
    length_dic = {
        "Non-Instrumental Vaginal Delivery": {
            "length_of_stay": [],
            "value": [],
            "percent": []
        },
        "Forceps Delivery": {
            "length_of_stay": [],
            "value": [],
            "percent": []
        },
        "Vacuum Extraction Delivery": {
            "length_of_stay": [],
            "value": [],
            "percent": []
        },
        "Caesarean Section": {
            "length_of_stay": [],
            "value": [],
            "percent": []
        }
    }

    for post_length in post_lengths:

        if post_length.method == "non-instrumental vaginal":
            length_dic["Non-Instrumental Vaginal Delivery"]["length_of_stay"].append(
                post_length.length_of_stay)
            length_dic["Non-Instrumental Vaginal Delivery"]["value"].append(
                post_length.value)
            length_dic["Non-Instrumental Vaginal Delivery"]["percent"].append(
                post_length.percent)

        elif post_length.method == "forceps":
            length_dic["Forceps Delivery"]["length_of_stay"].append(
                post_length.length_of_stay)
            length_dic["Forceps Delivery"]["value"].append(post_length.value)
            length_dic["Forceps Delivery"]["percent"].append(
                post_length.percent)

        elif post_length.method == "vacuum extraction":
            length_dic["Vacuum Extraction Delivery"]["length_of_stay"].append(
                post_length.length_of_stay)
            length_dic["Vacuum Extraction Delivery"]["value"].append(
                post_length.value)
            length_dic["Vacuum Extraction Delivery"]["percent"].append(
                post_length.percent)

        elif post_length.method == "c-section":
            length_dic["Caesarean Section"]["length_of_stay"].append(
                post_length.length_of_stay)
            length_dic["Caesarean Section"]["value"].append(post_length.value)
            length_dic["Caesarean Section"]["percent"].append(
                post_length.percent)


    return {
        "chart_title": title,
        "method": method,
        "chart_data": length_dic
    }

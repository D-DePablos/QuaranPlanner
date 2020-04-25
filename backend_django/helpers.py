"""Functions to be utilised within manage.py shell"""


def delete_all(model):
    model.objects.all().delete()


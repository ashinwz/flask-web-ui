# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from apps.home import blueprint
from flask import render_template, request
from flask_login import login_required
from jinja2 import TemplateNotFound
from apps.authentication.models import Users


@blueprint.route('/index')
@login_required
def index():
    return render_template('home/index.html', segment='index')

@blueprint.route('/features')
@login_required
def features():
    count = len(Users.query.all())
    # xAxis = [20, 30, 4, 23, 67, 35]
    # yAxis = [60, 30, 65, 45, 67, 35]
    return render_template('home/sample-page.html', users=Users.query.all(), count=count, segment='sample-page')


@blueprint.route('/table')
@login_required
def table():
    return render_template('home/tbl_bootstrap.html', segment='table')

@blueprint.route('/chart')
@login_required
def chart():
    return render_template('home/chart-apex.html', segment='chart')


# @blueprint.route('/<template>')
# @login_required
# def route_template(template):

#     try:

#         if not template.endswith('.html'):
#             template += '.html'

#         # Detect the current page
#         segment = get_segment(request)

#         # Serve the file (if exists) from app/templates/home/FILE.html
#         return render_template("home/" + template, segment=segment)

#     except TemplateNotFound:
#         return render_template('home/page-404.html'), 404

#     except:
#         return render_template('home/page-500.html'), 500


# Helper - Extract current page name from request
def get_segment(request):

    try:

        segment = request.path.split('/')[-1]

        if segment == '':
            segment = 'index'

        return segment

    except:
        return None

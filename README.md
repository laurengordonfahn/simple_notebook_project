#Simple Notebook

##Project Description:

A simple RESTful flask app that allows a user to create, view, edit, reorder by date, and delete notes. Using Facebook Oauth2 sign-in. One page fully dynamic. A simple building block application for future projects to be built on-top of.

##Enjoy This Project Online:

notebookonline.herokuapp.com

## Getting Started:

##Prerequisites:

1) Download the project in a directory of its own. Navigate into the new directory and type in the following command.  

    $ git clone https://github.com/laurengordonfahn/simple_notebook_project
2) Create secrets.sh file and .gitignore file

```
$ touch secrets.sh
$ touch .gitignore
```

3) Add enviromental variables to secrets.sh using the export library (see facebook section for explaination and example)
4) Add secrets.sh and any other private files not to be seen on github to .gitingore file 

```
env/
*.sh
*.pyc
```

4) Create a virtual environment using virtualenv to house the required frameworks. Source the secrets file to this enviroment after(see number 6 in facebook section for contents of secrets.sh file) if you are unsure you have this capacity visit https://virtualenv.pypa.io/en/stable/: 

```
$ virtualenv env
$ source env/bin/activate
$ 
```

5) Pip install will enable installation of the project requirements
If you are uncertain if you have pip install visit the website : https://pip.pypa.io/en/stable/installing/

6) Once the env is sourced secrets.sh dependencies are loaded so you can source secrets.sh. This is to load the enviromental variables into the evniroment.

```
$ source secrets.sh
```

4) Make sure you are in the first level of your newly created directory then pip install the requirements, the file will be read into the environment automatically:

```
$ pip install -r requirements.txt
```

5) For your information these are the project requirements found in the requirements.txt file

```
blinker==1.4
click==6.6
Flask==0.12
Flask-DebugToolbar==0.10.0
flask-marshmallow==0.7.0
Flask-SQLAlchemy==2.1
itsdangerous==0.24
Jinja2==2.8.1
MarkupSafe==0.23
marshmallow==2.12.2
pkg-resources==0.0.0
psycopg2==2.6.2
pytz==2016.10
six==1.10.0
SQLAlchemy==1.1.4
Werkzeug==0.11.15
```

## Installing:
1) create a database using postgres and source the database
``` 
    $ createdb notebook
    $ python model.py
```

2) To run the server file server.py :
``` 
    $ python server.py
```
3) Create an account on Facebook developers to support Facebook oauth2 sign-in:
    1) Visit Facebook Developers: https://developers.facebook.com/
    2) Follow instructions for creating a web app
    3) For local hosting use i.e.
        App Domains: localhost
        site URL: http://localhost:5000/
    4) For web use i.e.
        App Domains: notebookonline.herokuapp
        site Url: http://notebookonline.herokuapp.com/
    5) Remember to change your App domain and site URL when deploying!
    6) The Facebook sign-in feature requires an API key that must be loaded into your local enviroment or the host server enviroment but can not be shared with your users. This secrete variable goes into the secrets.sh file you have made for your project. For this project the following code is used to represent the facebook APP_ID.

    ```
    export APP_ID="The number facebook assigns you in string format"

    ``` 
    Access this info in you code as shown in the server.py code using the os library

## Running the tests:
1) create a database using postgres and source the database

```
    $ createdb notebooktest
    $ python test_model.py
```
2) Run the unittests, Jasmine tests are under construction at this time

```
   $ python test_server.py
```

## Built With:
* Python- Backend Language
* Flask - Python web frame work
* SqlAlchemy- Database Toolkit for python
* PostgreSQL- Object Relational Database System
* Unittest- Testing Framework
* Javascript- Front end language
* JQuery- Javascript Library
* Jasmine- Testing Framework (under construction)

## Current Features Completed/In-Progress:
* Add a new note with automatic display (complete)
* Delete a note (complete)
* Change the date order notes are displayed (complete)
* Edit and existing note (in-progress)

## Future Build-Out:
* Build-Out test suites in both Unittests and Jasmine - there are never too many good tests.
* Add Facebook sign-in
* Confirm before deletion of a note.
* Tighten endpoints 
* Enable users to be able to create different folders to organize notes
* Deploy on Heroku


## Author:
* Lauren Gordon-Fahn

## Acknowledgments:
* Adam Bozanich for being an amazing mentor who is helping me expand my understanding of industry standards to become a stronger and stronger software engineer. 

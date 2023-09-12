
_A simple student management web application with CRUD operations developed in Django and React Js_


Screen shots 

![Screenshot (144)](https://github.com/Allan-Kipkemei/students/assets/73424910/6c254186-33ce-430f-9ee5-5259a380aa00)

![Screenshot (145)](https://github.com/Allan-Kipkemei/students/assets/73424910/39fc2d15-190b-42ff-8dd9-f12edb61bd52)

![Screenshot (146)](https://github.com/Allan-Kipkemei/students/assets/73424910/1f438ff7-d6a1-407b-a8ac-be6f27074f12)
 


## Project Setup

- Clone the repository in a local folder
    ```sh
  git clone https://github.com/Allan-Kipkemei/students.git
    ```
- Open terminal and verify python version
  ```sh
    python --version
    ```
- Verify if node and npm are installed
  ```sh
    node --version
    npm -version
    ```
## Setup Backend
- Nvaigate to cloned project directory
  ```sh
    cd smwa-project
    ```
- Create a python virtual environment for backend
  ```sh
    python3 -m venv myvenv
    ```
- Activate the virtual environment
  ```sh
  # For winodws
    myvenv\Scripts\activate
  # For linux
    source myvenv/bin/activate
    ```
- Install python libraries
  ```sh
   cd backend
   pip install -r requirements.txt
    ```
- Start Django server
  ```sh
   python manage.py runserver
    ```
- Django backend server will start on http://localhost:8000/

## Setup Frontend
- Open a new terminal and navigate to frontend directory
  ```sh
   cd smwa-project/frontend
    ```
- Install frontend libraries using npm
  ```sh
   npm install
    ```
- Start Node server
  ```sh
   npm start
    ```
- Once node is started you can access the application on http://localhost:3000/

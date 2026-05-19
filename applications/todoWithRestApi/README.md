# ToDo application

In order to work properly in a dev environment
please follow the nexts steps:

1. Start up the data base. Ensure docker desktop is running.
    ```docker compose up -d``` 
2. Make a copy of *.env.template* file and rename it to *.env*
3. Update environment variables with yours
4. Run ```npm i```
5. Run the following Prisma commands:
   1. ```npx prisma migrate dev```
   2. ```npx prisma generate``` 
6. Run ```npm run dev```
7. Reach *seed* endpoint by accessing to `http://localhost:3000/api/todos/seed`
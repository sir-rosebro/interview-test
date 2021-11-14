## PMG

# TASK - 1

API END_POINT: http://localhost:3000/api/singer/get_singers_by_name

I have added singerController to handle singer-releated api calls. The singers data which is given in the task is stored as an arry in the data folder in the root directory. Likewise, the API call which we make to itunes will be done by the singer file in axios folder. Combining of nestd arrays and sorting will perfomed by helper functins in the utils folder. The routes folder take care of all the routes and the services folder looks after the database operations.

About Solution:
The map function iterate over singers and make an api calls to iTunes server. The response comes as a promise will be stored in a variable name 'singerPromises'. Then all the promise will be resolved to get the array of response which later will be merge through the help of helper function 'combine Arrays'. Now, the array is sorted by primaryGenreName and releaseDate. I have used JavaScript sort function to get the required result and once we are done we will send the the result as our response.

# TASK - 2

API END_POINT: http://localhost:3000/api/item/get_avg_price_of_sizes

I created db 'testInterview' in my local MongoDB Compass. I created the collection items and added the given data. The model name 'Item' is created with the required Properties. The itemService in the services folder performs the task of finding average of sizes. I have done aggregation to perfom grouping. Then, the project splice the required field only and unwinds destructure the document based in the sizes. Now, the group creates the new documents with the sizes and average Price. Average price is calculated with avg and sum function before it is sorted by averagePrice.

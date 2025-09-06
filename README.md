
# Khabar Khojo

This is a simple restful api project where you can learn about pagination, dark mode, image optimization, search etc...




## Live Link

[![Static Badge](https://img.shields.io/badge/Live%20Preview-badge?style=social)](https://khabar-khojo-restfullapi-project.netlify.app/)
![application overview](./live_preview.PNG)


## API Reference

#### Get all items

```http
  GET https://www.themealdb.com/api/json/v1/1/search.php?
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `s=` | `string` | Ex: Arrabiata |

#### Get item

```http
  GET https://www.themealdb.com/api/json/v1/1/lookup.php?
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `i=`      | `integer` | 52772 |

#### Get category

```http
  GET https://www.themealdb.com/api/json/v1/1/categories.php
```

#### Get category based data

```http
  GET https://www.themealdb.com/api/json/v1/1/filter.php?
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `c=`      | `string` | seafood |

#### Get ingredient

```http
  GET https://www.themealdb.com/api/json/v1/1/list.php?i=list
```

#### Get ingredient based data

```http
  GET https://www.themealdb.com/api/json/v1/1/filter.php?
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `i=`      | `string` | chicken_breast |





## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Meal with id

`VITE_apiUrl`

`VITE_apiUrlID`

Category

`VITE_apiCategory`

`VITE_apiSubCategory`

Ingredient

`VITE_apiIngredient`

`VITE_apiSubIngredient`


## Installation

Install my-project with npm

```bash
  npm install
```
then
```bash
  npm run dev
``` 
it should be open http://localhost:5173/
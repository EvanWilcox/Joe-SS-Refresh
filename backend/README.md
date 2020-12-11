# Backend Joe'SS Refresh

## Steps to get started

1. `npm install`
2. If `prisma/dev.db` does not exist
   1. `npx prisma migrate save --experimental`
   2. `npx prisma migrate up --experimental`
   3. `npx prisma generate`
   4. `node src/seed.js`
   5. `npx prisma studio` (Check if data seeded properly)
3. `node src/index.js`
4. Go to [localhost:4000](http://localhost:4000) to see the backend

## Code to try out

### Find Student by ID

```
query {
  student(id: $id){
    id
    name
    email
    classes{
      title
    }
    advisor {
      name
    }
  }
}
```

### Show all Classes

```
query {
	classes{
    title
  }
}
```

### Create a Student

```
mutation {
  createStudent(email: "dcsbc8@mst.edu", name: "Devinda Senanayaka", advisorId: 2){
    name
    id
    email
  }
}
```

### Find Student

```
query{
  student(id: 2){
    name
    email
  }
}
```

### Update Student

```
mutation{
  updateStudent(id: 5, name: "Dev", advisorId: 3){
    name
    email
    advisor{
      name
    }
  }
}
```

### Add Class to Student

```
mutation {
  addClassToStudent(studentID: 2, classID: 1){
    name
    classes{
      title
      id
    }
  }
}
```

### Remove Class from Student

```
mutation {
  removeClassToStudent(studentID: 2, classID: 1){
    name
    classes{
      title
      id
    }
  }
}
```

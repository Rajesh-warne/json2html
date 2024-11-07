Write a JavaScript function json2html(data) that accepts a JavaScript array of objects like this:


      [
        { Name: "Alice", Age: 25 },
        { Name: "Bob", Age: 30 },
        { Name: "Charlie", Age: 35, Gender: "M" }
      ]
    
... and returns a HTML table with 3 columns: Name, Age, and Gender, like this:


      <table data-user="rajeshwarne1@gmail.com">
        <thead>
          <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
        </thead>
        <tbody>
          <tr><td>Alice</td><td>25</td></tr>
          <tr><td>Bob</td><td>30</td></tr>
          <tr><td>Charlie</td><td>35</td><td>M</td></tr>
        </tbody>
      </table>
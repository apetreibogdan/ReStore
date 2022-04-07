
<!-- ABOUT THE PROJECT -->
## About The Project

RE-Store online marketplace, where people come together to make, sell, buy, and collect unique items.
The aim of the project is to learn React and to consolidate knowledge in .net framework.
Not all options are implemented, yet.



![Untitled1](https://user-images.githubusercontent.com/70704260/162291028-7e0a55e4-2804-47a8-8e66-6fade5c4d616.png)


<p align="right">(<a href="#top">back to top</a>)</p>


### Main Features

- Sort Products by Category and Supplier - Not implemented yet
- Register (the account is enabled after email confirmation) -Not implemented yet
- Login using Identity Package with cookies -Not implemented yet
- Logout -Not implemented yet
- Add to Cart
- Cart Preview
- Edit cart items quantity from the Cart Preview (Increase, Decrease, Remove)
- Place an order with or without an account -Not implemented yet
- Pay by credit card using Stripe -Not implemented yet
- User Dashboard - Placed orders details -Not implemented yet
- Email confirmation for both user registration and orders -Not implemented yet
- Event logging -Not implemented yet

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* MVC design pattern

Back End:
* [ASP .NET Core][asp-net-core]
* [C#][c#]
* [Entity Framework Core][ef-core]

Security:
* [Identity][identity-core] - Not implemented yet

Front End:
* [HTML][html]
* [CSS][css]
* [JavaScript][js]
* [React.js][react]
* [MUI][material-ui]

Database Management:
* [Microsoft SQL Server][msql-server]
* [Microsoft SQL Server Management Studio][ssms]

IDE:
* [Microsoft Visual Studio][visual-studio]

<p align="right">(<a href="#top">back to top</a>)</p>



### Visuals

Home Page:

![Home](https://user-images.githubusercontent.com/70704260/162292610-424b5216-4eda-4989-8df0-d2c6fec5e770.png)

Cart:

![Cart](https://user-images.githubusercontent.com/70704260/162291939-0fa20b6a-9f93-4dd0-bc32-10ed36e3664d.png)

Product Details:

![Product Details](https://user-images.githubusercontent.com/70704260/162293158-a6a91e02-5ce6-4f15-8b1d-9c156c07ca48.png)


<!-- GETTING STARTED -->
## Getting Started

### Installation

-  Create a MSSQL database
- Go to appsettings.json -> Fill in the ConnectionStrings section with the database Connection String

  ```json
  "ConnectionStrings": {
    "DefaultConnection": "Server=<your-database-connection-string-comes-here>; Database =REstore; Trusted_Connection=True; MultipleActiveResultSets=True"
  }
  ```
  
  ```
  Update-Database
  ```




<!-- MARKDOWN LINKS & IMAGES -->


[asp-net-core]: https://dotnet.microsoft.com/en-us/learn/aspnet/what-is-aspnet-core
[ef-core]: https://docs.microsoft.com/en-us/ef/core/
[c#]: https://docs.microsoft.com/en-us/dotnet/csharp/
[html]: https://html.com/
[css]: https://www.w3.org/Style/CSS/Overview.en.html
[js]: https://www.javascript.com/
[react]: https://reactjs.org/
[react-net]: https://reactjs.net/
[msql-server]: https://www.microsoft.com/en-us/sql-server/sql-server-2019
[identity-core]: https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-6.0&tabs=visual-studio
[material-ui]: https://mui.com/
[ssms]: https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15
[visual-studio]: https://visualstudio.microsoft.com/



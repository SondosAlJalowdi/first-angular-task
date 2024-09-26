import { Component} from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import  * as fa from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardComponent, CommonModule, FontAwesomeModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
    {
      imgSrc: "assets/images/user.png",
      name: "John Doe",
      submittedOn: "20/7/2024",
      duration: "1 Weeks (6/7/2024 - 13/7/2024)",
      salary: "1980 JD",
      title: "Non Paid Vacation",
      dateRange: "12/5/2023 - 14/5/2023",
      days: "6 days",
      approvedBy: "James Smith"
  },
  {
      imgSrc: "assets/images/user.png",
      name: "John Doe",
      submittedOn: "17/9/2023",
      duration: "1 Weeks (6/11/2024 - 13/11/2024)",
      salary: "734 JD",
      title: "Annual Vacation",
      dateRange: "4/1/2023 - 7/1/2023",
      days: "5 days",
      approvedBy: "James Smith"
  },
  {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "16/11/2023",
      duration: "3 Weeks (9/8/2024 - 30/8/2024)",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "20/6/2023 - 29/6/2023",
      days: "6 days",
      approvedBy: "James Smith"
  },
  {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "18/8/2024",
      duration: "3 Weeks (5/4/2024 - 26/4/2024)",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "27/2/2023 - 28/2/2023",
      days: "2 days",
      approvedBy: "James Smith"
  }
  
  ];
  faListCheck = fa.faListCheck; 
  faUser = fa.faUser;
  faChart = fa.faChartSimple;
  faMagnifyingGlass = fa.faMagnifyingGlass;
  searchText: string = '';
}

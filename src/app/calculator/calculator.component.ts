import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  bill: number = 0;
  area: number= 0;;
  showResult: boolean = false;
  panels: number= 0;
  requiredArea: number= 0;
  capital: number= 0;
  breakevenYears: number= 0;
  earnings: number= 0;
  phoneNumber:any;

  constructor(private http: HttpClient) { }

  calculate() {
    this.http.post<any>('http://localhost:3000/api/calculate', { bill: this.bill, area: this.area,phoneNumber:this.phoneNumber })
      .subscribe(res => {
        var response = res.lead
        this.panels = response.panelsNeeded;
        this.requiredArea = response.requiredArea;
        this.capital = response.capitalNeeded;
        this.breakevenYears = response.breakevenYears;
        this.earnings = response.earnings25Years;
        this.showResult = true;
      },(error => {
        
      }));
  }

  onPhoneNumberInput(event: any) {
    const input = event.target as HTMLInputElement;
    const trimmedValue = input.value.replace(/\D/g, '');
    const maxLength = 10; 

    if (trimmedValue.length > maxLength) {
      input.value = trimmedValue.slice(0, maxLength); 
      this.phoneNumber = input.value;
    } else {
      this.phoneNumber = trimmedValue;
    }
  }
}

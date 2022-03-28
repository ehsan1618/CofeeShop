import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cofee } from '../Model/cofee';
import { CofeeServiceService } from '../services/cofee-service.service';

@Component({
  selector: 'app-cofee-detail',
  templateUrl: './cofee-detail.component.html',
  styleUrls: ['./cofee-detail.component.css']
})
export class CofeeDetailComponent implements OnInit {

  id: number | undefined;
  cofee!: Cofee;;
   
  constructor(
    private service: CofeeServiceService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCofeeDetail();
  }

  getCofeeDetail() {
    this.service.getCofeeById(this.id).subscribe({
      next: _cofee =>{
        this.cofee = _cofee
      }
    })
  }

}

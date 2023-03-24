import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category.interface";
import {ToastrService} from "ngx-toastr";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {BASE_URL} from "../../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit{


  constructor(private http: HttpClient, private toastr: ToastrService, private authService: AuthService, private router: Router) { }
  categories: Category[]=[];
  ngOnInit() {
    if(!this.authService.isAdmin()) {
      this.router.navigateByUrl('/');
    }
    this.getCategories();
  }

  getCategories() {
    this.http.get<Category[]>(BASE_URL + '/api/v1/categories').pipe()
      .subscribe(category => {
          this.categories = category;
        }
      )
  }

  removeCategory(categoryID : String) {
    this.http.delete<Category>(BASE_URL + '/api/v1/categories/' + categoryID).subscribe(  {
      next: () => {
        this.ngOnInit();
        this.toastr.error('Succesvol verwijderd!', 'Category verwijderd!');
      },
      error: () => {
        this.toastr.error('Er is een product die nog gebruik maakt van dit categorie!', 'Conflict!');
      }
    });

  }

}

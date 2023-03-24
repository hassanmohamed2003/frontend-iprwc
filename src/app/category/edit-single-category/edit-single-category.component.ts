import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../models/category.interface";
import {AdminService} from "../../admin.service";
import {ToastrService} from "ngx-toastr";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {BASE_URL} from "../../app.component";

@Component({
  selector: 'app-edit-single-category',
  templateUrl: './edit-single-category.component.html',
  styleUrls: ['./edit-single-category.component.css']
})
export class EditSingleCategoryComponent implements OnInit{

  category: Category = {} as Category;
  public loading = false;
  form:FormGroup;




  constructor(private toastr: ToastrService, private fb:FormBuilder, private router: Router, private route: ActivatedRoute, private http: HttpClient, private authService: AuthService, private adminService: AdminService) {

    this.form = this.fb.group({
      name: ["", Validators.required],
    });
  }
  ngOnInit(): void {
    if(!this.authService.isAdmin()) {
      this.router.navigateByUrl('/');
    }
    let categoryId!: String;
    this.route.params.subscribe(params => {
      categoryId = params['id'];
    });
    this.getCategory(categoryId);

  }

  getCategory(categoryId: String) {
    this.http.get<Category>(BASE_URL + '/api/v1/categories/' + categoryId).subscribe((res) => {
      this.category = res;
      this.form.setValue({
        name: this.category.name,
      });
    })
  }


  onSubmit() {

    const val = this.form.value;
    if (this.form.valid) {
      this.loading = true
      console.log(val);
      this.adminService.editCategory(this.category.id, val.name).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigateByUrl('/admin/edit-categories');
          this.toastr.success('Succesvol gewijzigd!', 'Categorie wijziging!')
        },
        error: error => {
          this.loading = false;
          console.error('There was an error!', error);
        }
      });

    } else {
      console.log('There was an error! Form invalid!');
    }
  }


}

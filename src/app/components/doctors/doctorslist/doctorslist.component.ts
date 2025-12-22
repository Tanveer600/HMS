import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Doctor } from '../../../core/models/doctor.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as DoctorActions from '../../../store/Patient/Doctor/doctor.actions';
import { selectDoctors, selectLoading, selectError } from '../../../store/Patient/Doctor/doctor.selectors';
@Component({
  selector: 'app-doctorslist',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './doctorslist.component.html',
  styleUrl: './doctorslist.component.css'
})
export class DoctorslistComponent {
  doctors$!: Observable<Doctor[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // 🔥 Dispatch action
    this.store.dispatch(DoctorActions.loadDoctors());

    // 🔥 Select data from store
    this.doctors$ = this.store.select(selectDoctors);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

deleteDoctor(id?: number): void {
  if (!id) return;

  if (!confirm('Are you sure you want to delete this doctor?')) return;

  // ✅ DELETE action dispatch
  this.store.dispatch(
    DoctorActions.deleteDoctor({ doctorId: id })
  );
}


  formatDate(dateStr: string): string {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${d.getFullYear()}`;
  }
}

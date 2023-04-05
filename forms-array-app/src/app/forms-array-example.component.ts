import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-forms-array-example',
  templateUrl: './forms-array-example.component.html',
  styleUrls: ['./forms-array-example.component.css'],
})
export class FormsArrayExampleComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  editForm = this.fb.group({
    companyName: ['', Validators.required],
    price: [0],
    rowCount: [0],
    lessons: this.fb.array([]),
  });

  showPriceRangeHint = false;

  ngOnInit(): void {
    this.editForm.controls['price'].valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((v) => {
        if (v !== null) {
          this.showPriceRangeHint = v < 1 || v > 10000;
        }
      });
  }

  get lessons() {
    // this.editForm.controls.
    return this.editForm.controls['lessons'] as FormArray;
  }

  addLesson() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required],
    });

    this.lessons.push(lessonForm);

    this.editForm.patchValue({ rowCount: this.lessons.length });
  }

  deleteLesson() {
    const sz = this.lessons.length;
    if (sz > 0) {
      this.lessons.removeAt(sz - 1);
      this.editForm.patchValue({ rowCount: this.lessons.length });
    }
  }
}

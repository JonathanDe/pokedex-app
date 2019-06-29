import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchValue: [''],
    });
  }

  ngOnInit() {}

  onValueChange() {
    this.valueChange.emit(this.searchForm.controls['searchValue'].value);
  }
}

import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalpopUpComponent } from "../modalpop-up/modalpop-up.component";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"]
})
export class IconComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  faqsDialog(): void {
    const dialogRef = this.dialog.open(ModalpopUpComponent, {
      width: "75%",
      height: "auto"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}

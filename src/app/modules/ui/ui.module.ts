import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../components/ui/layout/layout.component';
import { HeaderComponent } from '../../components/ui/header/header.component';
import { FooterComponent } from '../../components/ui/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }

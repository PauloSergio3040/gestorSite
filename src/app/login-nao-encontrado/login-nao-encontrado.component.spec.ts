import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNaoEncontradoComponent } from './login-nao-encontrado.component';

describe('LoginNaoEncontradoComponent', () => {
  let component: LoginNaoEncontradoComponent;
  let fixture: ComponentFixture<LoginNaoEncontradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginNaoEncontradoComponent]
    });
    fixture = TestBed.createComponent(LoginNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

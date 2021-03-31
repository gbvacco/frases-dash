import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private firestore: AngularFirestore, private modalService: NgbModal) { }
  public title = 'frases-dash';
  closeResult = '';

  public form = new FormGroup({
    frase: new FormControl(''),
    autor: new FormControl(''),
    autor_url: new FormControl(''),
    usuario_rede_social: new FormControl(''),
    link_usuario_rede_social: new FormControl(''),
    nome_livro: new FormControl(''),
    autor_livro: new FormControl(''),
    resumo_livro: new FormControl(''),
    livro_url: new FormControl(''),
    likes: new FormControl(''),
    data_exibicao: new FormControl('')
  });

  private convertDateToDoc(chooseDate: string) {
    const splitDate = chooseDate.split('-');
    return `${splitDate[2]}${splitDate[1]}${splitDate[0]}`
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  public add(content: any) {
    this.firestore
      .collection('frases')
      .doc(this.convertDateToDoc(this.form.get('data_exibicao')?.value))
      .set(this.form.value)
      .then(res => {
        this.open(content);
        console.log(res);
        // this.form.reset();
      })
      .catch(e => {
        console.log(e);
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

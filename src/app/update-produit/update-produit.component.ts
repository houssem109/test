import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: ``
})
export class UpdateProduitComponent {
  currentProduit= new Produit();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,

    private produitService: ProduitService){

  }
  ngOnInit():void{
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot. params['id']);
    console.log(this.currentProduit);

  }
  updateProduit()
  {
   // console.log(this.currentProduit);
   this.produitService.updateProduit(this.currentProduit);
   this.router.navigate(['produits']);

  }
}

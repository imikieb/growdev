/*Função de Nome*/
var nome="Rodrigo Mikio";
var nomehtml=document.getElementById("nome-no-html");
function colocarnomenohtml(nome)
{
    nomehtml.innerHTML=nome;
}
colocarnomenohtml(nome);

/*Função de Cargo*/
var cargo="Desenvolvedor Jr.";
var cargohtml=document.getElementById("cargo-no-html");
function colocarcargonohtml(cargo)
{
    cargohtml.innerHTML=cargo;
}
colocarcargonohtml(cargo);

/*Função de Botão*/
var infotext1=document.getElementById("infotext-1");
var infotext2=document.getElementById("infotext-2");
function cliquenoprojetos()
{
    console.log("Clicou no botão.");
    infotext2.style.display="block";
    infotext1.style.display="none";
}
function cliquenosobremim()
{
    console.log("Clicou no botão.");
    infotext1.style.display="block";
    infotext2.style.display="none";
}
const criarObjeto = (nomeComp) => {
  let cadastroPessoa = {};
  let emailPessoa = nomeComp.split(" ").join("_").toLowerCase();
  cadastroPessoa['nome'] = nomeComp;
  cadastroPessoa['email'] = `${emailPessoa}@trybe.com`

  return cadastroPessoa;
}
console.log(criarObjeto("Nemo Thropp"));

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Elphaba Thropp'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Glinda Upland'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Fiyero Tigelaar'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(criarObjeto));

// LINK SQLFIDDLE http://sqlfiddle.com/#!9/e7e296/1

CREATE TABLE 
Giria (
    id_giria int AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(50),
    titulo_trad varchar(50),
    descricao varchar (50),
    descricao_trad varchar (50),
    exemplo_giria varchar (300),
    exemplo_giria_trad varchar (300),
 id_dificuldade int (6),
  id_local_phrase int (2)
);

CREATE TABLE
Phrasal_verb (
    id_phrasal int AUTO_INCREMENT PRIMARY KEY,
    verbo_phrasal varchar(50),
    verbo_phrasal_trad varchar (50),
    significado_phrasal varchar(50),
    significado_phrasal_trad_lite varchar(50),
    descricao varchar (50),
    descricao_trad varchar (50),
 id_dificuldade int (6)
  
);

CREATE TABLE
Ditado_Popular (
    id_Ditado int AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(50),
  titulo_trad_lite varchar(50),
    significado_ditado varchar(50),
  significado_ditado_trad varchar(50),
    descricao varchar (50),
   descricao_trad varchar (50),
    id_dificuldade int (6) 
);

CREATE TABLE
Expressao_Idiomatica (
    id_Expressao int AUTO_INCREMENT PRIMARY KEY,
    titulo_expressao varchar(50),
    titulo_expressao_trad_lite varchar(50),
    significado_expressao varchar (100),
    significado_expressao_trad varchar (100),
    descricao_expressao varchar(300),
    descricao_expressao_trad varchar(300),
 id_dificuldade int (6) 
);

CREATE TABLE
Dificuldade (
    id_Dificuldade int AUTO_INCREMENT PRIMARY KEY,
    tipo_Dificuldade varchar(50)
);

Create table
usuario (
id_usu int AUTO_INCREMENT PRIMARY KEY, 
username varchar(50), 
senha varchar(50),
nome_completo varchar(60),
data_nasc date,
email varchar(50)  
);

Create table local_phrase(
  id_local_phrase int AUTO_INCREMENT PRIMARY KEY,
  local_name varchar (50),
  local_name_traducao varchar (50)
);

insert into usuario values (1, 'lucasdlg', 'qwert', 'Lucas Domingos Leão Gomes','1997/05/05', 'lucasdomingosleao55@hotmail.com');

insert into Dificuldade values (1, 'Fácil');
insert into Dificuldade values  (2, 'Medio');
insert into Dificuldade values (3, 'Dificil');

insert into Giria  values (1, 'All mouth and no trousers','Toda a boca e sem calças','All talk, no action i.e. Braggadocio.','Todas as conversas, sem ação.','Dont listen to him. Hes all mouth and no trousers.','Não o escute. Ele é toda boca e sem calças.',1,1);
insert into Giria values (2, 'Argy-bargy','Argy-bargy',' An argument or heated confrontation','Um argumento ou confronto aquecido','I’m not interested in getting into an argy-bargy over it.','Eu não estou interessado em entrar em um argy-bargy sobre ele.',3,1);

insert into Phrasal_Verb values  (1,'Give up','Desistir','Desistir','I want to Give Up','Eu quero desistir','Eu quero desistir - i want to give up',2);

insert into Ditado_Popular values (1,'Put the horses before the cars','Coloque os cavalos antes dos carros','Put the horses before the cars','Coloque os cavalos antes dos carros','Do not rush','Nao se precipitar',3);

insert into Expressao_Idiomatica values (1,'The best of both worlds','O melhor de dois mundos','The best of the two different opportunities at the same time','O melhor de duas oportunidades diferentes ao mesmo tempo','By working part-time and looking after her kids two days a week she managed to get the best of both worlds.','Trabalhando meio período e cuidando dos filhos duas vezes por semana, ela conseguiu ter o melhor dos dois mundos.',3);

insert into local_phrase values (1, 'Americano','American');
insert into local_phrase values (2, 'Britanico','British');
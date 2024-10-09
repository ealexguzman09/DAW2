#Numero 1 
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base
engine = create_engine('postgresql://miusuario:erick@localhost/mydb')

#Numero 2
Base = declarative_base()
from sqlalchemy import Column, Integer, String
class miTabla(Base):
    __tablename__ = 'mitabla'
    id = Column(Integer, primary_key=True)
    nombre = Column(String)
Base.metadata.create_all(engine)

#Numero 3
Sesion = sessionmaker(bind=engine)
sesion = Sesion()
nuevo_registro = miTabla(nombre="Alex")
sesion.add(nuevo_registro)
sesion.commit()
sesion.close()
print()
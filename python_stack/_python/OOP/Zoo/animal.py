from re import T


class Animal:
    def __init__(self, name, age, hl, hp ):
        self.name=name
        self.age=age
        self.health_level=hl
        self.happiness_level=hp

    def food(self, health, happiness):
        self.health_level+=health
        self.happiness_level+=happiness
        return(self)

    def display_info(self):
        print(f"Animal is: {self.type} \nName: {self.name} | Health level : {self.health_level} | Happiness level : {self.happiness_level} | {self.unique} \n " , "-"*65)

# ----------------------Giraffe-------------------------
class Giraffe (Animal):
    def __init__(self, name):
        super().__init__(name, age=10, hl=50, hp=90)
        self.type="Giraffe"
        self.unique= "Tall is: 120"

    def food(self):
        super().food(health=60, happiness=50)

# ----------------------Camel-------------------------
class Camel(Animal):
    def __init__(self, name):
        super().__init__(name, age=20 , hl=60, hp=40)
        self.type="Camel"
        self.unique = "Energy is: 100"

    def food(self):
        super().food(health=90, happiness=40)

# ----------------------Tiger-------------------------
class Tiger(Animal):
    def __init__(self, name):
        super().__init__(name, age=25 , hl=80, hp=60)
        self.type="Tiger"
        self.unique= "Speed is: 200" 

    def food(self):
        super().food(health=100, happiness=200)

# --------------------test-----------------------
kalvin = Giraffe("kalvem")
jad = Camel("jad")
Tom = Tiger("Tom")



# kalvin.display_info()
# jad.display_info()
# Tom.display_info()

# kalvin.food()
# jad.food()
# Tom.food()
# print ("_"*100)
# kalvin.display_info()
# jad.display_info()
# Tom.display_info()

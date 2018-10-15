import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    function returnTypeString(words: string): string {
      //return words * 123;
      return words;
    }

    function TupleFunction(words: string): [string, number] {
      return [words, words.length];
    };

    let tupleOutput = TupleFunction("Embrace");
    console.log(tupleOutput[0]);
    //Embrace
    console.log(tupleOutput[1]);
    //7

    enum InsuranceTypeEnum {
      HealthInsurance = 1,
      Wellness = 2,
      Prescription = 4,
    }

    let insuranceType = InsuranceTypeEnum.HealthInsurance | InsuranceTypeEnum.Wellness;
    console.log(insuranceType & InsuranceTypeEnum.HealthInsurance);
    //1
    console.log(insuranceType & InsuranceTypeEnum.Prescription);
    //0

    let mAyHeM: any;
    //console.log(mAyHeM.GrabTenThousandItems().PickOneAtRandom());
    //will give no errors during development
    //console will not like this

    let bulldogString: string;
    bulldogString = "Bulldog"
    //bulldogString.GrabTenThousandItems();
    console.log(bulldogString);

    let notNullString = "notnull";
    //notNullString = null;

    let inferredNumber = 1;
    //inferredNumber = "three?";

    interface IAnimal {
      Name: string;
      Breed: string;
      Age: number;
    }
    class Dog implements IAnimal {
      Name: string;
      Breed: string;
      Age: number;
      BarkingProblem: boolean;

      constructor(dogInfo: Dog) {
        this.Name = dogInfo.Name;
        this.Breed = dogInfo.Breed;
        this.Age = dogInfo.Age;
        this.BarkingProblem = dogInfo.BarkingProblem;
      }
    }

    class Cat implements IAnimal {
      Name: string;
      Breed: string;
      Age: number;
      MeowingProblem: boolean;

      constructor(catInfo: Cat) {
        this.Name = catInfo.Name;
        this.Breed = catInfo.Breed;
        this.Age = catInfo.Age;
        this.MeowingProblem = catInfo.MeowingProblem;
      }
    }

    let Eddie = new Dog({
      Name: "Eddie",
      BarkingProblem: false,
      Age: 1,
      Breed: "Chihuahua"
    });

    let Rocky = new Dog({
      Name: "Rocky",
      BarkingProblem: true,
      Age: 1,
      Breed: "Pomeranian"
    });

    let Adley = new Cat({
      Name: "Adley",
      MeowingProblem: false,
      Age: 15,
      Breed: "Tabby"
    })

    function LogDog(dog: Dog, isBirthday: boolean = false): void {
      if (isBirthday) {
        console.log(`Happy Birthday ${dog.Name}!!!`);
      }
      console.log(`${dog.Name} is a ${dog.Age} year old ${dog.Breed}. Does ${dog.BarkingProblem ? '' : 'not '}have barking problem.`);
    }

    LogDog(Rocky);
    LogDog(Eddie, true);

    function isDog(pet: Dog | Cat): pet is Dog {
      return (<Dog>pet).BarkingProblem !== undefined;
    }

    function LogPet(pet: Dog | Cat) {
      console.log(`${pet.Name} is a ${pet.Age} year old ${pet.Breed}.`);
      if (isDog(pet)) {
        console.log(pet.BarkingProblem);
      } else {
        console.log(pet.MeowingProblem);
      }
    }

    LogPet(Rocky);
    LogPet(Adley);


  }

}

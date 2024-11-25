import { creerClasseDynamique } from "../CreateurClasse";

describe("createDynamicClass", () => {
  it("lorsque je crée une classe avec un nom, une nouvelle classe est retournée", () => {
    const MaClasseDynamique = creerClasseDynamique("ClasseDynamique");
    expect(MaClasseDynamique).not.toBeFalsy();
    expect(MaClasseDynamique.name).toEqual("ClasseDynamique");
  });

  it("lorsque je crée une instance d'une class dynamique, l'instance est bien créée et est une instance de la classe dynamique", () => {
    const MaClasseDynamique = creerClasseDynamique("ClasseDynamique");
    expect(MaClasseDynamique.name).toEqual("ClasseDynamique");

    const monInstance = new MaClasseDynamique();
    expect(monInstance).toBeDefined();
    expect(monInstance).toBeInstanceOf(MaClasseDynamique);
    expect(monInstance.constructor.name).toEqual(MaClasseDynamique.name);
  });

  it("lorsque je crée des instances de plusieurs classes dynamiques, les instances sont bien des instances de leurs classes dynamiques respectives et ne sont donc pas égales.", () => {
    const MaClasseDynamique1 = creerClasseDynamique("ClasseDynamique1");
    const MaClasseDynamique2 = creerClasseDynamique("ClasseDynamique2");

    const monInstance1 = new MaClasseDynamique1();
    expect(monInstance1).toBeDefined();
    expect(monInstance1).toBeInstanceOf(MaClasseDynamique1);
    expect(monInstance1.constructor.name).toEqual(MaClasseDynamique1.name);

    const monInstance2 = new MaClasseDynamique2();
    expect(monInstance2).toBeDefined();
    expect(monInstance2).toBeInstanceOf(MaClasseDynamique2);
    expect(monInstance2.constructor.name).toEqual(MaClasseDynamique2.name);

    expect(monInstance1).not.toStrictEqual(monInstance2);
  });
});

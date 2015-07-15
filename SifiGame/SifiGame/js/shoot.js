function shoot(ob1, x, y, pindex, type) {


    if (ob1.shootcooldown < 1) {
        projectilecollection.add(pindex,type);
        projectilecollection.array[projectilecollection.count() - 1].launch(ob1.x, ob1.y, x, y);

        ob1.shootcooldown = ob1.shootcooldownmax(type);
    }
}
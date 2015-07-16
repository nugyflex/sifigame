function shoot(ob1, x, y, pindex, type) {

        projectilecollection.add(pindex,type);
        projectilecollection.array[projectilecollection.count() - 1].launch(ob1.x, ob1.y, x, y);

}
function shoot(ob1, x, y, pindex, type, xoffset, yoffset) {

        projectilecollection.add(pindex,type);
        projectilecollection.array[projectilecollection.count() - 1].launch(ob1.x+xoffset, ob1.y+yoffset, x, y);

}
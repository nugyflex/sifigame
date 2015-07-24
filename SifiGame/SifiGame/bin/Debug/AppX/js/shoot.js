function shoot(ob1, x, y, pindex, type, xoffset, yoffset) {
    if (type == "acid") {
        miscobjectcollection.add("acid", ob1.x, ob1.y, 0, 0)
        miscobjectcollection.array[miscobjectcollection.array.length - 1].launch(ob1.x + xoffset, ob1.y + yoffset, x, y)
    }
    else {
        projectilecollection.add(pindex, type);
        projectilecollection.array[projectilecollection.count() - 1].launch(ob1.x + xoffset, ob1.y + yoffset, x, y);
    }

}
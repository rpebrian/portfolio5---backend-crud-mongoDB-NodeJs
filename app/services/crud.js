class CRUD {
   async create(table, data){
       const dataSiswa =  await table.create(data);
        return dataSiswa
    }

    async findAll(table){
        const dataSiswa = await table.find();
        return dataSiswa
    }

    async findOne(table, id){
        const dataSiswa = await table.findById(id);
        return dataSiswa
    }

    async update(table, data, id){
        const dataSiswa = await table.findByIdAndUpdate(id ,data, { useFindAndModify: false });
        return dataSiswa
    }

    async delete(table, id){
        const dataSiswa = await table.findByIdAndRemove(id);
        return  dataSiswa
    }

    async deleteAll(table){
        const dataSiswa = await table.deleteMany();
        return dataSiswa
    }
}



module.exports = CRUD
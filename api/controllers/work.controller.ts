import { Handler } from "express";
import mongoose from "mongoose";
import Work from "../models/work.model"

export const getWorks:Handler = async(req,res) => {
    try {
        const works = await Work.find({});
        res.status(200).json(works)
    } catch (error) {
        res.status(400).json({msg:"Something happened",error})
    }
}

export const createWork:Handler = async(req,res) => {
    const {name,link,description,demo,type,image} =  req.body
    if(!name || !link || !description || !type || !image){
        throw Error("Fills all camps")
    }
    try {
        const newWork = await Work.create({name,link,description,demo,type,image});
        if(!newWork){
            res.status(400).json({msg:"Something Happened"})
        }
        res.status(201).json(newWork)
    } catch (error) {
        res.status(400).json({msg:"An error has ocurred",error})
    }    
}

export const updateWork:Handler = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(403).json({msg:"Invalid ID"})
    }
    try {
        const updatedWork = await Work.findByIdAndUpdate(
            {_id:id},
            {...req.body},
            {new:true}
        );
        if(!updatedWork) res.status(403).json({msg:"book not found"});
        res.status(200).json(updatedWork)
    } catch (error) {
        res.send(400).json({msg:"An error has ocurred",error})
    }   
}

export const deleteWork:Handler= async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(403).json({msg:"invalid ID"})
    }
    try {
        const deletedWork = await Work.findByIdAndRemove({_id:id});
        if(!deletedWork){
            res.status(404).json({msg:"Work not found"})
        }
        res.status(203).json(deletedWork)

    } catch (error) {
        res.status(400).json(error);
    }
}
'use client'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios';
type Props = {}

const CreateNoteDialog = (props: Props) => {
    const [input, setInput] = useState('');
    const createDoc = useMutation({
        mutationFn: async () => {
          const response = await axios.post("/api/createDoc", {
            name: input,
          });
          return response.data;
        },
      });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input === "") {
          window.alert("Please enter a name for your Doc File");
          return;
        }
        createDoc.mutate(undefined, {
          onSuccess: () => {
            console.log("sucess");
            // hit another endpoint to uplod the temp dalle url to permanent firebase url
            // uploadToFirebase.mutate(note_id);
            // router.push(`/notebook/${note_id}`);
          },
          onError: (error) => {
            console.error(error);
            window.alert("Failed to create new Doc File");
          },
        });
      };
 
  return (
    <Dialog>
    <DialogTrigger>
      <div className="border-dashed border-2 flex border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
        <Plus className="w-6 h-6 text-green-600" strokeWidth={3} />
        <h2 className="font-semibold text-green-600 sm:mt-2">
          New Note Book
        </h2>
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New Doc</DialogTitle>
        <DialogDescription>
          You can create a new doc by clicking the button below.
        </DialogDescription>
      </DialogHeader>
      {/* <div className="h-"></div> */}
      <form onSubmit={handleSubmit}>
        <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
          placeholder="Name..."
        />
        <div className="h-6"></div>
        <div className="flex items-center gap-2">
          <Button type="reset" variant={"secondary"}>
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-green-600"
          >
            Create
          </Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
  )
}

export default CreateNoteDialog
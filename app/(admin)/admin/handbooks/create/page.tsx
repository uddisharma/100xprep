'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { IconCalendar } from '@tabler/icons-react'
import { Cover } from '@/components/ui/cover'
import { Select } from '@/components/ui/select'

export default function UpdateInterview() {
    const [date, setDate] = useState<Date>()
    const [isRemote, setIsRemote] = useState(true)

    return (
        <div className='w-full'>
            <div className=' p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] '>
                <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">
                    <h2 className="text-3xl font-bold text-white">
                        <Cover>
                            Create Handbook
                        </Cover>
                    </h2>
                    <div className="grid grid-cols-2 gap-2 lg:flex lg:space-x-2">
                        <Button>
                            <IconCalendar className="mr-2 h-4 w-4" /> View All Interviews
                        </Button>

                    </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Interview Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="interviewer">Interviewer</Label>
                                    <Input id="interviewer" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="interviewee">Interviewee</Label>
                                    <Input id="interviewee" placeholder="Jane Smith" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="job-title">Job Title</Label>
                                    <Select id="status" className="min-h-[40px]">
                                        <option value="scheduled">Scheduled</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Pick Date & Time</Label>
                                    <Input id="company" placeholder="Tech Corp" type='datetime-local' />

                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Schedule</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="description">Interview Description</Label>
                                    <Textarea
                                        id="description"
                                        placeholder="Enter any additional details about the interview..."
                                        className="min-h-[150px]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="notes">Interviewer Notes</Label>
                                    <Textarea
                                        id="notes"
                                        placeholder="Enter any notes for the interviewer..."
                                        className="min-h-[150px]"
                                    />
                                </div>
                            </CardContent>
                        </Card>


                    </div>

                    <div className="mt-6 flex justify-end space-x-4">
                        <Button variant="outline">Cancel</Button>
                        <Button type="submit">Update Interview</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
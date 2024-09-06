'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { IconCalendar } from '@tabler/icons-react'
import { Cover } from '@/components/ui/cover'

export default function UpdateInterview() {
    const [date, setDate] = useState<Date>()
    const [isRemote, setIsRemote] = useState(true)

    return (
        <div className='w-full'>
            <div className=' p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] '>
                <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">
                    <h2 className="text-3xl font-bold text-white">
                        <Cover>
                            Interview Update
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
                                    <Input id="job-title" placeholder="Senior React Developer" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input id="company" placeholder="Tech Corp" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Schedule</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Date</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-start text-left font-normal",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                <IconCalendar className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="start-time">Start Time</Label>
                                        <Select>
                                            <SelectTrigger id="start-time">
                                                <SelectValue placeholder="Select time" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                                                    <SelectItem key={hour} value={`${hour}:00`}>
                                                        {`${hour.toString().padStart(2, '0')}:00`}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="duration">Duration</Label>
                                        <Select>
                                            <SelectTrigger id="duration">
                                                <SelectValue placeholder="Select duration" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="30">30 minutes</SelectItem>
                                                <SelectItem value="60">1 hour</SelectItem>
                                                <SelectItem value="90">1.5 hours</SelectItem>
                                                <SelectItem value="120">2 hours</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="remote"
                                        checked={isRemote}
                                        onCheckedChange={setIsRemote}
                                    />
                                    <Label htmlFor="remote">Remote Interview</Label>
                                </div>
                                {isRemote ? (
                                    <div className="space-y-2">
                                        <Label htmlFor="platform">Platform</Label>
                                        <Select>
                                            <SelectTrigger id="platform">
                                                <SelectValue placeholder="Select platform" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="zoom">Zoom</SelectItem>
                                                <SelectItem value="google-meet">Google Meet</SelectItem>
                                                <SelectItem value="microsoft-teams">Microsoft Teams</SelectItem>
                                                <SelectItem value="skype">Skype</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <Label htmlFor="location">Location</Label>
                                        <Input id="location" placeholder="Office Address" />
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <Card className="md:col-span-2">
                            <CardHeader>
                                <CardTitle>Additional Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="description">Interview Description</Label>
                                    <Textarea
                                        id="description"
                                        placeholder="Enter any additional details about the interview..."
                                        className="min-h-[100px]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="notes">Interviewer Notes</Label>
                                    <Textarea
                                        id="notes"
                                        placeholder="Enter any notes for the interviewer..."
                                        className="min-h-[100px]"
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
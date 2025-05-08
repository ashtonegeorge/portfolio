import { RobotIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const experienceType = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    icon: RobotIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }
            ]
        }),
        defineField({
            name: 'date',
            type: 'string',
        }),
        defineField({
            name: 'companyName',
            type: 'string',
        }),
        defineField({
            name: 'location',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'blockContent',
        }),
        defineField({
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                    title: 'tag'
                }
            ]
        }),
        defineField({
            name: 'companyWebsite',
            type: 'url',
        }),
    ],

})
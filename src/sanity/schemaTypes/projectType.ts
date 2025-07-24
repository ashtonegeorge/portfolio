import { CodeBlockIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: CodeBlockIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        }),
        defineField({
            name: 'repoUrl',
            type: 'url',
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
            name: 'publishedAt',
            type: 'datetime',
        }),
        defineField({
            name: 'description',
            type: 'blockContent',
        }),
        defineField({
            name: 'techStack',
            type: 'blockContent',
        }),
        defineField({
            name: 'product',
            type: 'blockContent',
        }),
        defineField({
            name: 'outcome',
            type: 'blockContent',
        }),
    ],

})
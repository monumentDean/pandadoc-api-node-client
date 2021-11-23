/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TemplateDetailsResponseAssignedTo } from './TemplateDetailsResponseAssignedTo';
import { HttpFile } from '../http/http';

export class TemplateDetailsResponseFields {
    'uuid'?: string;
    'name'?: string;
    'title'?: string;
    'placeholder'?: string;
    'value'?: any;
    'assignedTo'?: TemplateDetailsResponseAssignedTo;
    'mergeField'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "placeholder",
            "baseName": "placeholder",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any",
            "format": ""
        },
        {
            "name": "assignedTo",
            "baseName": "assigned_to",
            "type": "TemplateDetailsResponseAssignedTo",
            "format": ""
        },
        {
            "name": "mergeField",
            "baseName": "merge_field",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplateDetailsResponseFields.attributeTypeMap;
    }

    public constructor() {
    }
}


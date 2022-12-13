/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class TemplateDetailsResponsePreassignedPerson {
    'email'?: string;
    'type'?: string;
    'placeholderName'?: string;
    'placeholderSource'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "placeholderName",
            "baseName": "placeholder_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "placeholderSource",
            "baseName": "placeholder_source",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplateDetailsResponsePreassignedPerson.attributeTypeMap;
    }

    public constructor() {
    }
}


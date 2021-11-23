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

import { HttpFile } from '../http/http';

export class TemplateDetailsResponseImages {
    'name'?: string;
    'blockUuid'?: string;
    'urls'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "blockUuid",
            "baseName": "block_uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplateDetailsResponseImages.attributeTypeMap;
    }

    public constructor() {
    }
}


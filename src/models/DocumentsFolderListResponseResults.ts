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

export class DocumentsFolderListResponseResults {
    'uuid'?: string;
    'name'?: string;
    'dateCreated'?: string;
    'hasFolders'?: boolean;
    'hasItems'?: boolean;

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
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasFolders",
            "baseName": "has_folders",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasItems",
            "baseName": "has_items",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentsFolderListResponseResults.attributeTypeMap;
    }

    public constructor() {
    }
}


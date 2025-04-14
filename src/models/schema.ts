import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

export const About = z
  .object({
    id: z.number(),
    documentId: z.string(),
    name: z.string(),
    organization: z.string(),
    description: z.unknown(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
    publishedAt: z.string().datetime({ offset: true }),
    createdBy: z
      .object({
        id: z.number(),
        documentId: z.string(),
        firstname: z.string(),
        lastname: z.string(),
        username: z.string(),
        email: z.string().email(),
        resetPasswordToken: z.string(),
        registrationToken: z.string(),
        isActive: z.boolean(),
        roles: z.array(
          z
            .object({
              id: z.number(),
              documentId: z.string(),
              name: z.string(),
              code: z.string(),
              description: z.string(),
              users: z.array(
                z
                  .object({ id: z.number(), documentId: z.string() })
                  .partial()
                  .strict()
                  .passthrough()
              ),
              permissions: z.array(
                z
                  .object({
                    id: z.number(),
                    documentId: z.string(),
                    action: z.string(),
                    actionParameters: z.unknown(),
                    subject: z.string(),
                    properties: z.unknown(),
                    conditions: z.unknown(),
                    role: z
                      .object({ id: z.number(), documentId: z.string() })
                      .partial()
                      .strict()
                      .passthrough(),
                    createdAt: z.string().datetime({ offset: true }),
                    updatedAt: z.string().datetime({ offset: true }),
                    publishedAt: z.string().datetime({ offset: true }),
                    createdBy: z
                      .object({ id: z.number(), documentId: z.string() })
                      .partial()
                      .strict()
                      .passthrough(),
                    updatedBy: z
                      .object({ id: z.number(), documentId: z.string() })
                      .partial()
                      .strict()
                      .passthrough(),
                    locale: z.string(),
                    localizations: z.array(
                      z
                        .object({ id: z.number(), documentId: z.string() })
                        .partial()
                        .strict()
                        .passthrough()
                    ),
                  })
                  .partial()
                  .strict()
                  .passthrough()
              ),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
              publishedAt: z.string().datetime({ offset: true }),
              createdBy: z
                .object({ id: z.number(), documentId: z.string() })
                .partial()
                .strict()
                .passthrough(),
              updatedBy: z
                .object({ id: z.number(), documentId: z.string() })
                .partial()
                .strict()
                .passthrough(),
              locale: z.string(),
              localizations: z.array(
                z
                  .object({ id: z.number(), documentId: z.string() })
                  .partial()
                  .strict()
                  .passthrough()
              ),
            })
            .partial()
            .strict()
            .passthrough()
        ),
        blocked: z.boolean(),
        preferedLanguage: z.string(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
        publishedAt: z.string().datetime({ offset: true }),
        createdBy: z
          .object({ id: z.number(), documentId: z.string() })
          .partial()
          .strict()
          .passthrough(),
        updatedBy: z
          .object({ id: z.number(), documentId: z.string() })
          .partial()
          .strict()
          .passthrough(),
        locale: z.string(),
        localizations: z.array(
          z
            .object({ id: z.number(), documentId: z.string() })
            .partial()
            .strict()
            .passthrough()
        ),
      })
      .partial()
      .strict()
      .passthrough(),
    updatedBy: z
      .object({ id: z.number(), documentId: z.string() })
      .partial()
      .strict()
      .passthrough(),
    locale: z.string(),
    localizations: z.array(
      z
        .object({
          id: z.number(),
          documentId: z.string(),
          name: z.string(),
          organization: z.string(),
          description: z.unknown(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
          publishedAt: z.string().datetime({ offset: true }),
          createdBy: z
            .object({ id: z.number(), documentId: z.string() })
            .partial()
            .strict()
            .passthrough(),
          updatedBy: z
            .object({ id: z.number(), documentId: z.string() })
            .partial()
            .strict()
            .passthrough(),
          locale: z.string(),
          localizations: z.array(
            z
              .object({ id: z.number(), documentId: z.string() })
              .partial()
              .strict()
              .passthrough()
          ),
        })
        .partial()
        .strict()
        .passthrough()
    ),
  })
  .partial()
  .strict()
  .passthrough();
export type About = z.infer<typeof About>;
export const AboutResponse = z
  .object({ data: About, meta: z.object({}).partial().strict().passthrough() })
  .partial()
  .strict()
  .passthrough();
export type AboutResponse = z.infer<typeof AboutResponse>;
export const Error = z
  .object({
    data: z
      .union([
        z.object({}).partial().strict().passthrough(),
        z.array(z.object({}).partial().strict().passthrough()),
      ])
      .nullish(),
    error: z
      .object({
        status: z.number().int(),
        name: z.string(),
        message: z.string(),
        details: z.object({}).partial().strict().passthrough(),
      })
      .partial()
      .strict()
      .passthrough(),
  })
  .strict()
  .passthrough();
export type Error = z.infer<typeof Error>;
export const AboutRequest = z
  .object({
    data: z
      .object({
        name: z.string(),
        organization: z.string(),
        description: z.unknown(),
        locale: z.string(),
        localizations: z.array(z.union([z.number(), z.string()])),
      })
      .partial()
      .strict()
      .passthrough(),
  })
  .strict()
  .passthrough();
export type AboutRequest = z.infer<typeof AboutRequest>;
export const Blog = z
  .object({
    id: z.number(),
    documentId: z.string(),
    title: z.string(),
    description: z.string(),
    content: z.unknown(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
    publishedAt: z.string().datetime({ offset: true }),
    createdBy: z
      .object({
        id: z.number(),
        documentId: z.string(),
        firstname: z.string(),
        lastname: z.string(),
        username: z.string(),
        email: z.string().email(),
        resetPasswordToken: z.string(),
        registrationToken: z.string(),
        isActive: z.boolean(),
        roles: z.array(
          z
            .object({
              id: z.number(),
              documentId: z.string(),
              name: z.string(),
              code: z.string(),
              description: z.string(),
              users: z.array(
                z
                  .object({ id: z.number(), documentId: z.string() })
                  .partial()
                  .strict()
                  .passthrough()
              ),
              permissions: z.array(
                z
                  .object({
                    id: z.number(),
                    documentId: z.string(),
                    action: z.string(),
                    actionParameters: z.unknown(),
                    subject: z.string(),
                    properties: z.unknown(),
                    conditions: z.unknown(),
                    role: z
                      .object({ id: z.number(), documentId: z.string() })
                      .partial()
                      .strict()
                      .passthrough(),
                    createdAt: z.string().datetime({ offset: true }),
                    updatedAt: z.string().datetime({ offset: true }),
                    publishedAt: z.string().datetime({ offset: true }),
                    createdBy: z
                      .object({ id: z.number(), documentId: z.string() })
                      .partial()
                      .strict()
                      .passthrough(),
                    updatedBy: z
                      .object({ id: z.number(), documentId: z.string() })
                      .partial()
                      .strict()
                      .passthrough(),
                    locale: z.string(),
                    localizations: z.array(
                      z
                        .object({ id: z.number(), documentId: z.string() })
                        .partial()
                        .strict()
                        .passthrough()
                    ),
                  })
                  .partial()
                  .strict()
                  .passthrough()
              ),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
              publishedAt: z.string().datetime({ offset: true }),
              createdBy: z
                .object({ id: z.number(), documentId: z.string() })
                .partial()
                .strict()
                .passthrough(),
              updatedBy: z
                .object({ id: z.number(), documentId: z.string() })
                .partial()
                .strict()
                .passthrough(),
              locale: z.string(),
              localizations: z.array(
                z
                  .object({ id: z.number(), documentId: z.string() })
                  .partial()
                  .strict()
                  .passthrough()
              ),
            })
            .partial()
            .strict()
            .passthrough()
        ),
        blocked: z.boolean(),
        preferedLanguage: z.string(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
        publishedAt: z.string().datetime({ offset: true }),
        createdBy: z
          .object({ id: z.number(), documentId: z.string() })
          .partial()
          .strict()
          .passthrough(),
        updatedBy: z
          .object({ id: z.number(), documentId: z.string() })
          .partial()
          .strict()
          .passthrough(),
        locale: z.string(),
        localizations: z.array(
          z
            .object({ id: z.number(), documentId: z.string() })
            .partial()
            .strict()
            .passthrough()
        ),
      })
      .partial()
      .strict()
      .passthrough(),
    updatedBy: z
      .object({ id: z.number(), documentId: z.string() })
      .partial()
      .strict()
      .passthrough(),
    locale: z.string(),
    localizations: z.array(
      z
        .object({
          id: z.number(),
          documentId: z.string(),
          title: z.string(),
          description: z.string(),
          content: z.unknown(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
          publishedAt: z.string().datetime({ offset: true }),
          createdBy: z
            .object({ id: z.number(), documentId: z.string() })
            .partial()
            .strict()
            .passthrough(),
          updatedBy: z
            .object({ id: z.number(), documentId: z.string() })
            .partial()
            .strict()
            .passthrough(),
          locale: z.string(),
          localizations: z.array(
            z
              .object({ id: z.number(), documentId: z.string() })
              .partial()
              .strict()
              .passthrough()
          ),
        })
        .partial()
        .strict()
        .passthrough()
    ),
  })
  .partial()
  .strict()
  .passthrough();
export type Blog = z.infer<typeof Blog>;
export const BlogListResponse = z
  .object({
    data: z.array(Blog),
    meta: z
      .object({
        pagination: z
          .object({
            page: z.number().int(),
            pageSize: z.number().int().gte(25),
            pageCount: z.number().int().lte(1),
            total: z.number().int(),
          })
          .partial()
          .strict()
          .passthrough(),
      })
      .partial()
      .strict()
      .passthrough(),
  })
  .partial()
  .strict()
  .passthrough();
export type BlogListResponse = z.infer<typeof BlogListResponse>;
export const BlogRequest = z
  .object({
    data: z
      .object({
        title: z.string(),
        description: z.string(),
        content: z.unknown(),
        locale: z.string(),
        localizations: z.array(z.union([z.number(), z.string()])),
      })
      .partial()
      .strict()
      .passthrough(),
  })
  .strict()
  .passthrough();
export type BlogRequest = z.infer<typeof BlogRequest>;
export const BlogResponse = z
  .object({ data: Blog, meta: z.object({}).partial().strict().passthrough() })
  .partial()
  .strict()
  .passthrough();
export type BlogResponse = z.infer<typeof BlogResponse>;
export const Category = z
  .object({
    id: z.number(),
    documentId: z.string(),
    name: z.string(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
    publishedAt: z.string().datetime({ offset: true }),
    createdBy: z
      .object({
        id: z.number(),
        documentId: z.string(),
        firstname: z.string(),
        lastname: z.string(),
        username: z.string(),
        email: z.string().email(),
        resetPasswordToken: z.string(),
        registrationToken: z.string(),
        isActive: z.boolean(),
        roles: z.array(
          z
            .object({
              id: z.number(),
              documentId: z.string(),
              name: z.string(),
              code: z.string(),
              description: z.string(),
              users: z.array(
                z
                  .object({ id: z.number(), documentId: z.string() })
                  .partial()
                  .strict()
                  .passthrough()
              ),
              permissions: z.array(
                z
                  .object({
                    id: z.number(),
                    documentId: z.string(),
                    action: z.string(),
                    actionParameters: z.unknown(),
                    subject: z.string(),
                    properties: z.unknown(),
                    conditions: z.unknown(),
                    role: z
                      .object({ id: z.number(), documentId: z.string() })
                      .partial()
                      .strict()
                      .passthrough(),
                    createdAt: z.string().datetime({ offset: true }),
                    updatedAt: z.string().datetime({ offset: true }),
                    publishedAt: z.string().datetime({ offset: true }),
                    createdBy: z
                      .object({ id: z.number(), documentId: z.string() })
                      .partial()
                      .strict()
                      .passthrough(),
                    updatedBy: z
                      .object({ id: z.number(), documentId: z.string() })
                      .partial()
                      .strict()
                      .passthrough(),
                    locale: z.string(),
                    localizations: z.array(
                      z
                        .object({ id: z.number(), documentId: z.string() })
                        .partial()
                        .strict()
                        .passthrough()
                    ),
                  })
                  .partial()
                  .strict()
                  .passthrough()
              ),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
              publishedAt: z.string().datetime({ offset: true }),
              createdBy: z
                .object({ id: z.number(), documentId: z.string() })
                .partial()
                .strict()
                .passthrough(),
              updatedBy: z
                .object({ id: z.number(), documentId: z.string() })
                .partial()
                .strict()
                .passthrough(),
              locale: z.string(),
              localizations: z.array(
                z
                  .object({ id: z.number(), documentId: z.string() })
                  .partial()
                  .strict()
                  .passthrough()
              ),
            })
            .partial()
            .strict()
            .passthrough()
        ),
        blocked: z.boolean(),
        preferedLanguage: z.string(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
        publishedAt: z.string().datetime({ offset: true }),
        createdBy: z
          .object({ id: z.number(), documentId: z.string() })
          .partial()
          .strict()
          .passthrough(),
        updatedBy: z
          .object({ id: z.number(), documentId: z.string() })
          .partial()
          .strict()
          .passthrough(),
        locale: z.string(),
        localizations: z.array(
          z
            .object({ id: z.number(), documentId: z.string() })
            .partial()
            .strict()
            .passthrough()
        ),
      })
      .partial()
      .strict()
      .passthrough(),
    updatedBy: z
      .object({ id: z.number(), documentId: z.string() })
      .partial()
      .strict()
      .passthrough(),
    locale: z.string(),
    localizations: z.array(
      z
        .object({
          id: z.number(),
          documentId: z.string(),
          name: z.string(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
          publishedAt: z.string().datetime({ offset: true }),
          createdBy: z
            .object({ id: z.number(), documentId: z.string() })
            .partial()
            .strict()
            .passthrough(),
          updatedBy: z
            .object({ id: z.number(), documentId: z.string() })
            .partial()
            .strict()
            .passthrough(),
          locale: z.string(),
          localizations: z.array(
            z
              .object({ id: z.number(), documentId: z.string() })
              .partial()
              .strict()
              .passthrough()
          ),
        })
        .partial()
        .strict()
        .passthrough()
    ),
  })
  .partial()
  .strict()
  .passthrough();
export type Category = z.infer<typeof Category>;
export const CategoryListResponse = z
  .object({
    data: z.array(Category),
    meta: z
      .object({
        pagination: z
          .object({
            page: z.number().int(),
            pageSize: z.number().int().gte(25),
            pageCount: z.number().int().lte(1),
            total: z.number().int(),
          })
          .partial()
          .strict()
          .passthrough(),
      })
      .partial()
      .strict()
      .passthrough(),
  })
  .partial()
  .strict()
  .passthrough();
export type CategoryListResponse = z.infer<typeof CategoryListResponse>;
export const CategoryRequest = z
  .object({
    data: z
      .object({
        name: z.string(),
        locale: z.string(),
        localizations: z.array(z.union([z.number(), z.string()])),
      })
      .partial()
      .strict()
      .passthrough(),
  })
  .strict()
  .passthrough();
export type CategoryRequest = z.infer<typeof CategoryRequest>;
export const CategoryResponse = z
  .object({
    data: Category,
    meta: z.object({}).partial().strict().passthrough(),
  })
  .partial()
  .strict()
  .passthrough();
export type CategoryResponse = z.infer<typeof CategoryResponse>;
export const postUpload_Body = z
  .object({
    path: z
      .string()
      .describe(
        "The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3)."
      )
      .optional(),
    refId: z
      .string()
      .describe("The ID of the entry which the file(s) will be linked to")
      .optional(),
    ref: z
      .string()
      .describe(
        "The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant)."
      )
      .optional(),
    field: z
      .string()
      .describe(
        "The field of the entry which the file(s) will be precisely linked to."
      )
      .optional(),
    files: z.array(z.instanceof(File)),
  })
  .strict()
  .passthrough();
export type postUpload_Body = z.infer<typeof postUpload_Body>;
export const UploadFile = z
  .object({
    id: z.number(),
    name: z.string(),
    alternativeText: z.string(),
    caption: z.string(),
    width: z.number(),
    height: z.number(),
    formats: z.number(),
    hash: z.string(),
    ext: z.string(),
    mime: z.string(),
    size: z.number(),
    url: z.string(),
    previewUrl: z.string(),
    provider: z.string(),
    provider_metadata: z.object({}).partial().strict().passthrough(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .strict()
  .passthrough();
export type UploadFile = z.infer<typeof UploadFile>;
export const postUpload_id_Id_Body = z
  .object({
    fileInfo: z
      .object({
        name: z.string(),
        alternativeText: z.string(),
        caption: z.string(),
      })
      .partial()
      .strict()
      .passthrough(),
    files: z.instanceof(File),
  })
  .partial()
  .strict()
  .passthrough();
export type postUpload_id_Id_Body = z.infer<typeof postUpload_id_Id_Body>;
export const postAuthlocal_Body = z
  .object({ identifier: z.string(), password: z.string() })
  .partial()
  .strict()
  .passthrough();
export type postAuthlocal_Body = z.infer<typeof postAuthlocal_Body>;
export const Users_Permissions_User = z
  .object({
    id: z.number(),
    username: z.string(),
    email: z.string(),
    provider: z.string(),
    confirmed: z.boolean(),
    blocked: z.boolean(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .strict()
  .passthrough();
export type Users_Permissions_User = z.infer<typeof Users_Permissions_User>;
export const Users_Permissions_UserRegistration = z
  .object({ jwt: z.string(), user: Users_Permissions_User })
  .partial()
  .strict()
  .passthrough();
export type Users_Permissions_UserRegistration = z.infer<
  typeof Users_Permissions_UserRegistration
>;
export const postAuthlocalregister_Body = z
  .object({ username: z.string(), email: z.string(), password: z.string() })
  .partial()
  .strict()
  .passthrough();
export type postAuthlocalregister_Body = z.infer<
  typeof postAuthlocalregister_Body
>;
export const postAuthresetPassword_Body = z
  .object({
    password: z.string(),
    passwordConfirmation: z.string(),
    code: z.string(),
  })
  .partial()
  .strict()
  .passthrough();
export type postAuthresetPassword_Body = z.infer<
  typeof postAuthresetPassword_Body
>;
export const postAuthchangePassword_Body = z
  .object({
    password: z.string(),
    currentPassword: z.string(),
    passwordConfirmation: z.string(),
  })
  .strict()
  .passthrough();
export type postAuthchangePassword_Body = z.infer<
  typeof postAuthchangePassword_Body
>;
export const Users_Permissions_PermissionsTree = z.record(
  z
    .object({
      controllers: z
        .record(
          z.record(
            z
              .object({ enabled: z.boolean(), policy: z.string() })
              .partial()
              .strict()
              .passthrough()
              .describe("every action of every controller")
          )
        )
        .describe("every controller of the api"),
    })
    .partial()
    .strict()
    .passthrough()
    .describe("every api")
);
export type Users_Permissions_PermissionsTree = z.infer<
  typeof Users_Permissions_PermissionsTree
>;
export const Users_Permissions_Role = z
  .object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    type: z.string(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .strict()
  .passthrough();
export type Users_Permissions_Role = z.infer<typeof Users_Permissions_Role>;
export const postUsersPermissionsroles_Body = z
  .object({
    name: z.string(),
    description: z.string(),
    type: z.string(),
    permissions: Users_Permissions_PermissionsTree,
  })
  .partial()
  .strict()
  .passthrough();
export type postUsersPermissionsroles_Body = z.infer<
  typeof postUsersPermissionsroles_Body
>;
export const postUsers_Body = z
  .object({ email: z.string(), username: z.string(), password: z.string() })
  .strict()
  .passthrough();
export type postUsers_Body = z.infer<typeof postUsers_Body>;
export const AboutListResponse = z
  .object({
    data: z.array(About),
    meta: z
      .object({
        pagination: z
          .object({
            page: z.number().int(),
            pageSize: z.number().int().gte(25),
            pageCount: z.number().int().lte(1),
            total: z.number().int(),
          })
          .partial()
          .strict()
          .passthrough(),
      })
      .partial()
      .strict()
      .passthrough(),
  })
  .partial()
  .strict()
  .passthrough();
export type AboutListResponse = z.infer<typeof AboutListResponse>;

export const schemas = {
  About,
  AboutResponse,
  Error,
  AboutRequest,
  Blog,
  BlogListResponse,
  BlogRequest,
  BlogResponse,
  Category,
  CategoryListResponse,
  CategoryRequest,
  CategoryResponse,
  postUpload_Body,
  UploadFile,
  postUpload_id_Id_Body,
  postAuthlocal_Body,
  Users_Permissions_User,
  Users_Permissions_UserRegistration,
  postAuthlocalregister_Body,
  postAuthresetPassword_Body,
  postAuthchangePassword_Body,
  Users_Permissions_PermissionsTree,
  Users_Permissions_Role,
  postUsersPermissionsroles_Body,
  postUsers_Body,
  AboutListResponse,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/about",
    requestFormat: "json",
    parameters: [
      {
        name: "sort",
        type: "Query",
        schema: z
          .string()
          .describe("Sort by attributes ascending (asc) or descending (desc)")
          .optional(),
      },
      {
        name: "pagination[withCount]",
        type: "Query",
        schema: z
          .boolean()
          .describe("Return page/pageSize (default: true)")
          .optional(),
      },
      {
        name: "pagination[page]",
        type: "Query",
        schema: z
          .number()
          .int()
          .describe("Page number (default: 0)")
          .optional(),
      },
      {
        name: "pagination[pageSize]",
        type: "Query",
        schema: z.number().int().describe("Page size (default: 25)").optional(),
      },
      {
        name: "pagination[start]",
        type: "Query",
        schema: z
          .number()
          .int()
          .describe("Offset value (default: 0)")
          .optional(),
      },
      {
        name: "pagination[limit]",
        type: "Query",
        schema: z
          .number()
          .int()
          .describe("Number of entities to return (default: 25)")
          .optional(),
      },
      {
        name: "fields",
        type: "Query",
        schema: z
          .string()
          .describe("Fields to return (ex: title,author)")
          .optional(),
      },
      {
        name: "populate",
        type: "Query",
        schema: z.string().describe("Relations to return").optional(),
      },
      {
        name: "filters",
        type: "Query",
        schema: z
          .object({})
          .partial()
          .strict()
          .passthrough()
          .describe("Filters to apply")
          .optional(),
      },
      {
        name: "locale",
        type: "Query",
        schema: z.string().describe("Locale to apply").optional(),
      },
    ],
    response: AboutResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "put",
    path: "/about",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AboutRequest,
      },
    ],
    response: AboutResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "delete",
    path: "/about",
    requestFormat: "json",
    response: z.number().int(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "get",
    path: "/auth/:provider/callback",
    requestFormat: "json",
    parameters: [
      {
        name: "provider",
        type: "Path",
        schema: z.string().describe("Provider name"),
      },
    ],
    response: Users_Permissions_UserRegistration,
  },
  {
    method: "post",
    path: "/auth/change-password",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: postAuthchangePassword_Body,
      },
    ],
    response: Users_Permissions_UserRegistration,
  },
  {
    method: "get",
    path: "/auth/email-confirmation",
    requestFormat: "json",
    parameters: [
      {
        name: "confirmation",
        type: "Query",
        schema: z
          .string()
          .describe("confirmation token received by email")
          .optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 301,
        description: `Redirects to the configure email confirmation redirect url`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/auth/forgot-password",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z
          .object({ email: z.string() })
          .partial()
          .strict()
          .passthrough(),
      },
    ],
    response: z
      .object({ ok: z.literal("true") })
      .partial()
      .strict()
      .passthrough(),
  },
  {
    method: "post",
    path: "/auth/local",
    description: `Returns a jwt token and user info`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: postAuthlocal_Body,
      },
    ],
    response: Users_Permissions_UserRegistration,
  },
  {
    method: "post",
    path: "/auth/local/register",
    description: `Returns a jwt token and user info`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: postAuthlocalregister_Body,
      },
    ],
    response: Users_Permissions_UserRegistration,
  },
  {
    method: "post",
    path: "/auth/reset-password",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: postAuthresetPassword_Body,
      },
    ],
    response: Users_Permissions_UserRegistration,
  },
  {
    method: "post",
    path: "/auth/send-email-confirmation",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z
          .object({ email: z.string() })
          .partial()
          .strict()
          .passthrough(),
      },
    ],
    response: z
      .object({ email: z.string(), sent: z.literal("true") })
      .partial()
      .strict()
      .passthrough(),
  },
  {
    method: "get",
    path: "/blogs",
    requestFormat: "json",
    parameters: [
      {
        name: "sort",
        type: "Query",
        schema: z
          .string()
          .describe("Sort by attributes ascending (asc) or descending (desc)")
          .optional(),
      },
      {
        name: "pagination[withCount]",
        type: "Query",
        schema: z
          .boolean()
          .describe("Return page/pageSize (default: true)")
          .optional(),
      },
      {
        name: "pagination[page]",
        type: "Query",
        schema: z
          .number()
          .int()
          .describe("Page number (default: 0)")
          .optional(),
      },
      {
        name: "pagination[pageSize]",
        type: "Query",
        schema: z.number().int().describe("Page size (default: 25)").optional(),
      },
      {
        name: "pagination[start]",
        type: "Query",
        schema: z
          .number()
          .int()
          .describe("Offset value (default: 0)")
          .optional(),
      },
      {
        name: "pagination[limit]",
        type: "Query",
        schema: z
          .number()
          .int()
          .describe("Number of entities to return (default: 25)")
          .optional(),
      },
      {
        name: "fields",
        type: "Query",
        schema: z
          .string()
          .describe("Fields to return (ex: title,author)")
          .optional(),
      },
      {
        name: "populate",
        type: "Query",
        schema: z.string().describe("Relations to return").optional(),
      },
      {
        name: "filters",
        type: "Query",
        schema: z
          .object({})
          .partial()
          .strict()
          .passthrough()
          .describe("Filters to apply")
          .optional(),
      },
      {
        name: "locale",
        type: "Query",
        schema: z.string().describe("Locale to apply").optional(),
      },
    ],
    response: BlogListResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "post",
    path: "/blogs",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: BlogRequest,
      },
    ],
    response: BlogResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "get",
    path: "/blogs/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.number(),
      },
    ],
    response: BlogResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "put",
    path: "/blogs/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: BlogRequest,
      },
      {
        name: "id",
        type: "Path",
        schema: z.number(),
      },
    ],
    response: BlogResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "delete",
    path: "/blogs/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.number(),
      },
    ],
    response: z.number().int(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "get",
    path: "/categories",
    requestFormat: "json",
    parameters: [
      {
        name: "sort",
        type: "Query",
        schema: z
          .string()
          .describe("Sort by attributes ascending (asc) or descending (desc)")
          .optional(),
      },
      {
        name: "pagination[withCount]",
        type: "Query",
        schema: z
          .boolean()
          .describe("Return page/pageSize (default: true)")
          .optional(),
      },
      {
        name: "pagination[page]",
        type: "Query",
        schema: z
          .number()
          .int()
          .describe("Page number (default: 0)")
          .optional(),
      },
      {
        name: "pagination[pageSize]",
        type: "Query",
        schema: z.number().int().describe("Page size (default: 25)").optional(),
      },
      {
        name: "pagination[start]",
        type: "Query",
        schema: z
          .number()
          .int()
          .describe("Offset value (default: 0)")
          .optional(),
      },
      {
        name: "pagination[limit]",
        type: "Query",
        schema: z
          .number()
          .int()
          .describe("Number of entities to return (default: 25)")
          .optional(),
      },
      {
        name: "fields",
        type: "Query",
        schema: z
          .string()
          .describe("Fields to return (ex: title,author)")
          .optional(),
      },
      {
        name: "populate",
        type: "Query",
        schema: z.string().describe("Relations to return").optional(),
      },
      {
        name: "filters",
        type: "Query",
        schema: z
          .object({})
          .partial()
          .strict()
          .passthrough()
          .describe("Filters to apply")
          .optional(),
      },
      {
        name: "locale",
        type: "Query",
        schema: z.string().describe("Locale to apply").optional(),
      },
    ],
    response: CategoryListResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "post",
    path: "/categories",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: CategoryRequest,
      },
    ],
    response: CategoryResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "get",
    path: "/categories/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.number(),
      },
    ],
    response: CategoryResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "put",
    path: "/categories/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: CategoryRequest,
      },
      {
        name: "id",
        type: "Path",
        schema: z.number(),
      },
    ],
    response: CategoryResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "delete",
    path: "/categories/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.number(),
      },
    ],
    response: z.number().int(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: Error,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: Error,
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: Error,
      },
      {
        status: 404,
        description: `Not Found`,
        schema: Error,
      },
      {
        status: 500,
        description: `Internal Server Error`,
        schema: Error,
      },
    ],
  },
  {
    method: "get",
    path: "/connect/:provider",
    description: `Redirects to provider login before being redirect to /auth/{provider}/callback`,
    requestFormat: "json",
    parameters: [
      {
        name: "provider",
        type: "Path",
        schema: z.string().regex(/.*/).describe("Provider name"),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 301,
        description: `Redirect response`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/upload",
    description: `Upload files`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        description: `Upload files`,
        type: "Body",
        schema: postUpload_Body,
      },
    ],
    response: z.array(UploadFile),
  },
  {
    method: "post",
    path: "/upload?id&#x3D;:id",
    description: `Upload file information`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        description: `Upload files`,
        type: "Body",
        schema: postUpload_id_Id_Body,
      },
      {
        name: "id",
        type: "Query",
        schema: z.string().describe("File id"),
      },
    ],
    response: z.array(UploadFile),
  },
  {
    method: "get",
    path: "/upload/files",
    requestFormat: "json",
    response: z.array(UploadFile),
  },
  {
    method: "get",
    path: "/upload/files/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        id: z.number(),
        name: z.string(),
        alternativeText: z.string(),
        caption: z.string(),
        width: z.number(),
        height: z.number(),
        formats: z.number(),
        hash: z.string(),
        ext: z.string(),
        mime: z.string(),
        size: z.number(),
        url: z.string(),
        previewUrl: z.string(),
        provider: z.string(),
        provider_metadata: z.object({}).partial().strict().passthrough(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .strict()
      .passthrough(),
  },
  {
    method: "delete",
    path: "/upload/files/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        id: z.number(),
        name: z.string(),
        alternativeText: z.string(),
        caption: z.string(),
        width: z.number(),
        height: z.number(),
        formats: z.number(),
        hash: z.string(),
        ext: z.string(),
        mime: z.string(),
        size: z.number(),
        url: z.string(),
        previewUrl: z.string(),
        provider: z.string(),
        provider_metadata: z.object({}).partial().strict().passthrough(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .strict()
      .passthrough(),
  },
  {
    method: "get",
    path: "/users",
    requestFormat: "json",
    response: z.array(Users_Permissions_User),
  },
  {
    method: "post",
    path: "/users",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: postUsers_Body,
      },
    ],
    response: Users_Permissions_User.and(
      z
        .object({ role: Users_Permissions_Role })
        .partial()
        .strict()
        .passthrough()
    ),
  },
  {
    method: "get",
    path: "/users-permissions/permissions",
    requestFormat: "json",
    response: z
      .object({ permissions: Users_Permissions_PermissionsTree })
      .partial()
      .strict()
      .passthrough(),
  },
  {
    method: "get",
    path: "/users-permissions/roles",
    requestFormat: "json",
    response: z
      .object({
        roles: z.array(
          Users_Permissions_Role.and(
            z.object({ nb_users: z.number() }).partial().strict().passthrough()
          )
        ),
      })
      .partial()
      .strict()
      .passthrough(),
  },
  {
    method: "post",
    path: "/users-permissions/roles",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: postUsersPermissionsroles_Body,
      },
    ],
    response: z
      .object({ ok: z.literal("true") })
      .partial()
      .strict()
      .passthrough(),
  },
  {
    method: "get",
    path: "/users-permissions/roles/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string().describe("role Id"),
      },
    ],
    response: z
      .object({ role: Users_Permissions_Role })
      .partial()
      .strict()
      .passthrough(),
  },
  {
    method: "put",
    path: "/users-permissions/roles/:role",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: postUsersPermissionsroles_Body,
      },
      {
        name: "role",
        type: "Path",
        schema: z.string().describe("role Id"),
      },
    ],
    response: z
      .object({ ok: z.literal("true") })
      .partial()
      .strict()
      .passthrough(),
  },
  {
    method: "delete",
    path: "/users-permissions/roles/:role",
    requestFormat: "json",
    parameters: [
      {
        name: "role",
        type: "Path",
        schema: z.string().describe("role Id"),
      },
    ],
    response: z
      .object({ ok: z.literal("true") })
      .partial()
      .strict()
      .passthrough(),
  },
  {
    method: "get",
    path: "/users/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string().describe("user Id"),
      },
    ],
    response: Users_Permissions_User,
  },
  {
    method: "put",
    path: "/users/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: postUsers_Body,
      },
      {
        name: "id",
        type: "Path",
        schema: z.string().describe("user Id"),
      },
    ],
    response: Users_Permissions_User.and(
      z
        .object({ role: Users_Permissions_Role })
        .partial()
        .strict()
        .passthrough()
    ),
  },
  {
    method: "delete",
    path: "/users/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string().describe("user Id"),
      },
    ],
    response: Users_Permissions_User,
  },
  {
    method: "get",
    path: "/users/count",
    requestFormat: "json",
    response: z.number(),
  },
  {
    method: "get",
    path: "/users/me",
    requestFormat: "json",
    response: Users_Permissions_User,
  },
]);

const baseUrl =
  typeof window === "undefined"
    ? "https://cms.tkgstrator.work" // サーバーからアクセスする用
    : "http://localhost:1337";
export const Client = new Zodios(baseUrl, endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
